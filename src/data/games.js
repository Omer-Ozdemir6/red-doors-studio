import sinirBg from "../assets/images/sinir-1-bg.png";
import echoBg from "../assets/images/project-echo-bg.png";

export const games = [
  {
    id: "sinir-1",
    code: "RD-01",
    title: "Sinir-1",
    eyebrow: "New psychological horror",
    genre: "Psychological Horror",
    status: "In Development",
    tagline: "The border was never meant to be crossed.",
    description:
      "Sisle kapanmis bir sinir hattinda gecen sinematik korku deneyimi. Oyuncu, kacis ile yuzlesme arasindaki en ince cizgide yurur.",
    detailIntro:
      "You wake where the road ends. Every checkpoint remembers a different version of you.",
    release: "Coming soon",
    platforms: ["Android", "iOS"],
    image: sinirBg,
    gallery: [sinirBg, echoBg, sinirBg],
    beats: [
      {
        title: "A border that listens",
        text: "Every sound, footstep and radio whisper changes how the crossing reacts to you.",
      },
      {
        title: "Fear without a weapon",
        text: "Survival depends on reading the dark, choosing when to run and when to disappear.",
      },
      {
        title: "One signal, two endings",
        text: "The deeper you go, the more the story rewrites what you thought you escaped.",
      },
    ],
  },
  {
    id: "project-echo",
    code: "RD-02",
    title: "Project Echo",
    eyebrow: "Sci-fi mystery concept",
    genre: "Sci-Fi Mystery",
    status: "Concept Phase",
    tagline: "Some voices are not memories.",
    description:
      "Terk edilmis bir sinyal laboratuvarinda ses, hafiza ve kimlik uzerine kurulu karanlik bir bilim kurgu gizemi.",
    detailIntro:
      "A dead station keeps broadcasting your name. The closer you listen, the less human it sounds.",
    release: "Concept phase",
    platforms: ["Android", "iOS"],
    image: echoBg,
    gallery: [echoBg, sinirBg, echoBg],
    beats: [
      {
        title: "Memory as a maze",
        text: "Rooms shift with recorded voices, forcing you to question which memories are yours.",
      },
      {
        title: "A signal that hunts",
        text: "The transmission becomes a presence, following every choice through broken speakers.",
      },
      {
        title: "Identity under pressure",
        text: "Every clue points inward until the lab feels less abandoned than waiting.",
      },
    ],
  },
];
