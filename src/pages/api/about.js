export default function handler(req, res) {
  res.status(200).json(
    [
      {
        id: 1,
        image: "https://i.postimg.cc/3RcyWSqb/1.jpg",
        name: "Jessica Vitanza",
        linkedin: "https://www.linkedin.com/in/jessica-vitanza/",
        github: "https://github.com/JessicaVitanza"
      },
      {
        id: 2,
        image: "https://i.postimg.cc/kGc9HBm3/2.png",
        name: "G. Simone Floresta",
        linkedin: "https://www.linkedin.com/in/giuliosimonefloresta/",
        github: "https://github.com/flgisimone"
      },
      {
        id: 3,
        image: "https://i.postimg.cc/brSZn0cY/3.jpg",
        name: "Dario Purpi",
        linkedin: "https://www.linkedin.com/in/dario-purpi/",
        github: "https://github.com/Dariopurpi"
      },
      {
        id: 4,
        image: "https://i.postimg.cc/HjGV9Jdw/4.jpg",
        name: "Anastasia Tyurikova",
        linkedin: "https://www.linkedin.com/in/anastasia-tyurikova/",
        github: "https://github.com/momonastia",
      },
      {
        id: 5,
        image: "https://i.postimg.cc/7PjVWmLV/5.jpg",
        name: "Anna Sardone",
        linkedin: "https://www.linkedin.com/in/anna-sardone-7416ba2b/",
        github: "",
      },
    ]
    )
}
