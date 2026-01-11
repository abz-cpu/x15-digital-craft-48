import { useState, useCallback, forwardRef, useImperativeHandle } from "react";

// Configurable default country code (without +)
const DEFAULT_COUNTRY_CODE = "44"; // UK

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
 * - Auto country code normalization (0 → +44)
 * - Length validation: 11-13 digits after normalization
 * - Inline error display
 */
export const PhoneInput = forwardRef<PhoneInputRef, PhoneInputProps>(
  ({ className }, ref) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [touched, setTouched] = useState(false);

    // Normalize phone to E.164 format
    const normalizePhone = useCallback((input: string): string => {
      const digitsOnly = input.replace(/\D/g, "");
      
      if (!digitsOnly) return "";
      
      // Already has country code (starts with valid code like 44, 353, 1, etc.)
      if (digitsOnly.startsWith("44") || digitsOnly.startsWith("353") || 
          digitsOnly.startsWith("1") && digitsOnly.length >= 11) {
        return "+" + digitsOnly;
      }
      
      // Starts with 0 - replace with country code
      if (digitsOnly.startsWith("0")) {
        return "+" + DEFAULT_COUNTRY_CODE + digitsOnly.substring(1);
      }
      
      // No leading 0 or country code - prepend default
      return "+" + DEFAULT_COUNTRY_CODE + digitsOnly;
    }, []);

    // Validate phone number
    const validatePhone = useCallback((input: string): string => {
      const digitsOnly = input.replace(/\D/g, "");
      
      // Empty is valid (optional field)
      if (!digitsOnly) return "";
      
      // Get normalized length (after adding country code)
      const normalized = normalizePhone(input);
      const normalizedDigits = normalized.replace(/\D/g, "");
      
      // Check length: 11-13 digits (e.g., 447356260648 = 12 digits)
      if (normalizedDigits.length < 11) {
        return "Enter a valid phone number (11–13 digits), or leave blank.";
      }
      
      if (normalizedDigits.length > 13) {
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
          placeholder="07xxx xxx xxx"
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
            Digits only. 11–13 numbers. Leave blank if you prefer email.
          </p>
        )}
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";
