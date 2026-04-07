import { useState, useCallback, forwardRef, useImperativeHandle } from "react";

// Configurable default country code (without +)
const DEFAULT_COUNTRY_CODE = "44"; // UK

// Country code patterns for auto-detection
const _COUNTRY_PATTERNS: { prefix: string; code: string; minLength: number }[] = [
  { prefix: "07", code: "44", minLength: 11 },    // UK mobile starting with 07
  { prefix: "01onal", code: "44", minLength: 10 }, // UK landline
  { prefix: "02", code: "44", minLength: 11 },    // UK landline (London, etc.)
  { prefix: "03", code: "44", minLength: 11 },    // UK non-geographic
  { prefix: "08", code: "353", minLength: 10 },   // Ireland mobile starting with 08
  { prefix: "1", code: "1", minLength: 10 },      // US/Canada
];
void _COUNTRY_PATTERNS;

export interface PhoneInputRef {
  getNormalizedPhone: () => string;
  validate: () => boolean;
  getError: () => string;
}

interface PhoneInputProps {
  className?: string;
}

/**
 * Phone input with:
 * - Optional field (empty = valid)
 * - Digits only (strips letters/symbols)
 * - Auto country code normalization (UK default, detects Ireland/US)
 * - Length validation: 10-13 digits after normalization
 * - Inline error display
 */
export const PhoneInput = forwardRef<PhoneInputRef, PhoneInputProps>(
  ({ className }, ref) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [touched, setTouched] = useState(false);

    // Normalize phone to E.164 format (digits only, no +)
    const normalizePhone = useCallback((input: string): string => {
      const digitsOnly = input.replace(/\D/g, "");
      
      if (!digitsOnly) return "";
      
      // Already has a valid international code
      if (digitsOnly.startsWith("44") && digitsOnly.length >= 12) {
        return digitsOnly; // UK with country code
      }
      if (digitsOnly.startsWith("353") && digitsOnly.length >= 12) {
        return digitsOnly; // Ireland with country code
      }
      if (digitsOnly.startsWith("1") && digitsOnly.length >= 11 && !digitsOnly.startsWith("07")) {
        return digitsOnly; // US/Canada with country code
      }
      
      // Detect Ireland mobile (starts with 08)
      if (digitsOnly.startsWith("08") && digitsOnly.length >= 10) {
        return "353" + digitsOnly.substring(1); // Remove leading 0, add +353
      }
      
      // UK number starting with 0 - replace with 44
      if (digitsOnly.startsWith("0")) {
        return DEFAULT_COUNTRY_CODE + digitsOnly.substring(1);
      }
      
      // No leading 0 or country code - prepend default (UK)
      return DEFAULT_COUNTRY_CODE + digitsOnly;
    }, []);

    // Validate phone number
    const validatePhone = useCallback((input: string): string => {
      const digitsOnly = input.replace(/\D/g, "");
      
      // Empty is valid (optional field)
      if (!digitsOnly) return "";
      
      // Reject very short entries (partial numbers like "07", "075")
      if (digitsOnly.length < 10) {
        return "Please enter a valid UK phone number.";
      }
      
      // Get normalized length (after adding country code)
      const normalized = normalizePhone(input);
      
      // Check length: 10-13 digits (e.g., 447356260648 = 12 digits)
      if (normalized.length < 10) {
        return "Please enter a valid UK phone number.";
      }
      
      if (normalized.length > 13) {
        return "Phone number too long. Maximum 13 digits.";
      }
      
      return "";
    }, [normalizePhone]);

    // Handle input - strip non-digits
    const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      // Allow only digits, strip everything else
      const sanitized = input.replace(/\D/g, "").slice(0, 13);
      setValue(sanitized);
      
      // Clear error while typing
      if (touched) {
        const err = validatePhone(sanitized);
        setError(err);
      }
    }, [touched, validatePhone]);

    // Handle paste - sanitize pasted content
    const handlePaste = useCallback((e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData("text");
      const sanitized = pasted.replace(/\D/g, "").slice(0, 13);
      setValue(sanitized);
      
      if (touched) {
        const err = validatePhone(sanitized);
        setError(err);
      }
    }, [touched, validatePhone]);

    // Handle blur - validate
    const handleBlur = useCallback(() => {
      setTouched(true);
      const err = validatePhone(value);
      setError(err);
    }, [value, validatePhone]);

    // Expose methods via ref
    useImperativeHandle(ref, () => ({
      getNormalizedPhone: () => {
        if (!value) return "";
        return normalizePhone(value);
      },
      validate: () => {
        const err = validatePhone(value);
        setError(err);
        setTouched(true);
        return !err;
      },
      getError: () => error,
    }), [value, normalizePhone, validatePhone, error]);

    const hasError = touched && error;

    return (
      <div className="space-y-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-secondary">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          value={value}
          onChange={handleInput}
          onPaste={handlePaste}
          onBlur={handleBlur}
          aria-invalid={hasError ? "true" : "false"}
          aria-describedby={hasError ? "phone-error" : "phone-hint"}
          className={`w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 ${
            hasError 
              ? "border-destructive focus-visible:ring-destructive/70" 
              : "border-border focus-visible:ring-primary/70"
          } ${className || ""}`}
          placeholder="07xxxxxxxxx"
        />
        {hasError ? (
          <p 
            id="phone-error" 
            className="text-xs text-destructive" 
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        ) : (
          <p id="phone-hint" className="text-xs text-muted-foreground">
            We'll format your number automatically. Leave blank if you prefer email.
          </p>
        )}
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";
