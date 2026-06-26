export const pelkatKeys = {
  all: ["pelkat"] as const,
  deatil: (id: string | number) => ["pelkat", id] as const,
};
