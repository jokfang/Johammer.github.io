import ky from "ky";

export const fetchArmyBookByUid = async (
  bookUid: string,
  gameSystemId: number,
  isBeta: boolean
) => {
  return ky
    .get(
      `/.netlify/functions/get-army-book?bookUid=${encodeURIComponent(
        bookUid
      )}&gameSystemId=${gameSystemId}&isBeta=${isBeta}`
    )
    .json();
};
