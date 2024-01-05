export const info = () => {
  const education = [
    {
      date: "Sept 6, 2023",
      major: "Computer Science",
      institution: "American University of Ras Al-Khaimah",
      description:
        "Granted 100% scholarship from the university, after graduating from highschool in Ethiopia",
      graduated: false,
    },
    {
      date: "Oct 1, 2022",
      major: "High School",
      institution: "St. Petros and Paul Catholic School",
      description: "Maintained high scores and had the highest CGPA",
      graduated: true,
    },
  ];
  const experience = [
    {
      date: "Nov 1, 2023",
      company: "Arif Studios",
      position: "MERN Stack Developer",
      description:
        "The company is located in MaryLand, USA. After applying for it got accepted as a full-time MERN developer.",
      current: true,
    },
    {
      date: "Dec 21, 2021",
      company: "Freelance",
      position: "Web App Development",
      description:
        "I freelanced for different developing companies on online platforms,whence, got a good experience from the projects.",
      current: true,
    },
  ];
  return { education, experience };
};
