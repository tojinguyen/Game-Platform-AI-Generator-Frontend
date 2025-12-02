"use client";

import { useState } from "react";
import Link from "next/link";
import { register } from "@/lib/auth";
import { useRouter } from "next/navigation";
import GalaxyBackground from "@/components/GalaxyBackground";
import GalaxyDecorations from "@/components/GalaxyDecorations";
import FormInput from "@/components/ui/FormInput";
import FormSelect from "@/components/ui/FormSelect";
import Button from "@/components/ui/Button";
import { ROUTES } from "@/constants";
import { Gender } from "@/lib/types";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState<Gender>("male");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await register({
        fullName,
        email,
        password,
        address,
        dateOfBirth: new Date(dateOfBirth).toISOString(),
        gender,
        phone,
      });
      console.log("Registration successful");
      router.push(ROUTES.LOGIN);
    } catch (err) {
      setError("Failed to register. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GalaxyBackground>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
        <GalaxyDecorations />
        <div className="w-full max-w-md p-6 space-y-4 bg-galaxy-primary/80 backdrop-blur-md rounded-lg shadow-galaxy galaxy-border relative z-10">
          <h1 className="text-2xl font-bold text-center galaxy-text">
            Create an account
          </h1>
          {error && (
            <p className="text-galaxy-pink text-sm text-center">{error}</p>
          )}
          <form className="space-y-4" onSubmit={handleRegister}>
            <FormInput
              id="fullName"
              name="fullName"
              type="text"
              label="Full Name"
              autoComplete="name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <FormInput
              id="email"
              name="email"
              type="email"
              label="Email address"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              id="password"
              name="password"
              type="password"
              label="Password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormInput
              id="address"
              name="address"
              type="text"
              label="Address"
              autoComplete="street-address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <FormInput
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              label="Date of Birth"
              required
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <FormSelect
              id="gender"
              name="gender"
              label="Gender"
              required
              value={gender}
              onChange={(e) => setGender(e.target.value as Gender)}
              options={genderOptions}
            />
            <FormInput
              id="phone"
              name="phone"
              type="tel"
              label="Phone Number"
              autoComplete="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button
              type="submit"
              variant="primary"
              fullWidth
              isLoading={isLoading}
            >
              Register
            </Button>
          </form>
          <div className="text-sm text-center">
            <p className="text-galaxy-silver">
              Already have an account?{" "}
              <Link
                href={ROUTES.LOGIN}
                className="font-medium text-galaxy-cyan hover:text-galaxy-pink transition-colors duration-200 cursor-pointer"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </GalaxyBackground>
  );
}
