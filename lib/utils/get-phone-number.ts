export function getPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");

  // Ubah awalan 0 menjadi 62
  const normalized = cleaned.startsWith("0")
    ? `62${cleaned.slice(1)}`
    : cleaned.startsWith("62")
      ? cleaned
      : `62${cleaned}`;

  // Pisahkan menjadi format +62 818-355-788
  const number = normalized.slice(2);

  const parts = [];
  if (number.length > 0) parts.push(number.slice(0, 3));
  if (number.length > 3) parts.push(number.slice(3, 6));
  if (number.length > 6) parts.push(number.slice(6));

  return `+62 ${parts.join("-")}`;
}
