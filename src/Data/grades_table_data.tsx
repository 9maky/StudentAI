function calculateArithmeticMean(grades: string[]): string {
  const sum = grades.reduce((acc, val) => acc + parseInt(val), 0);
  const mean = sum / grades.length;
  return mean.toFixed(2);
}

export const analitika_table_data = [
  {
    id: 1,
    subject: "Engleski jezik",
    grades: ["4", "5", "1"],
    mean: calculateArithmeticMean(["4", "5", "1"]),
  },
  {
    id: 2,
    subject: "Njemački jezik",
    grades: ["2", "5", "4"],
    mean: calculateArithmeticMean(["2", "5", "4"]),
  },
  {
    id: 3,
    subject: "Historija/Povijest",
    grades: ["5", "3", "5"],
    mean: calculateArithmeticMean(["5", "3", "5"]),
  },
  {
    id: 4,
    subject: "Geografija/Zemljopis",
    grades: ["5"],
    mean: calculateArithmeticMean(["5"]),
  },
  {
    id: 5,
    subject: "Matematika",
    grades: ["5", "5", "5", "5", "3", "4", "5"],
    mean: calculateArithmeticMean(["5", "5", "5", "5", "3", "4", "5"]),
  },
  {
    id: 6,
    subject: "Fizika",
    grades: ["5"],
    mean: calculateArithmeticMean(["5"]),
  },
  {
    id: 7,
    subject: "Hemija/Kemija",
    grades: ["2", "5"],
    mean: calculateArithmeticMean(["2", "5"]),
  },
  {
    id: 8,
    subject: "Biologija",
    grades: ["5", "5"],
    mean: calculateArithmeticMean(["5", "5"]),
  },
  {
    id: 9,
    subject: "Informatika",
    grades: ["5", "5"],
    mean: calculateArithmeticMean(["5", "5"]),
  },
  {
    id: 10,
    subject: "Likovna kultura",
    grades: ["5"],
    mean: calculateArithmeticMean(["5"]),
  },
  {
    id: 11,
    subject: "Sport/Šport",
    grades: ["5", "5"],
    mean: calculateArithmeticMean(["5", "5"]),
  },
  {
    id: 12,
    subject: "Kultura religija",
    grades: ["5"],
    mean: calculateArithmeticMean(["5"]),
  },
  {
    id: 13,
    subject: "Programiranje",
    grades: ["5"],
    mean: calculateArithmeticMean(["5"]),
  },
  {
    id: 14,
    subject: "Bosanski jezik i književnost",
    grades: ["5", "4", "4"],
    mean: calculateArithmeticMean(["5", "4", "4"]),
  },
];
