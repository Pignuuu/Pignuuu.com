const startedCodingDate = "11/03/2019";

const daysCoded = startedCodingDate => {
    const today = new Date();
    const startedCoding = new Date(startedCodingDate);
    const res = Math.abs(today - startedCoding) / 1000;
    const days = Math.floor(res / 86400);
    return days;
};

document.querySelector(".dc").innerHTML = daysCoded(startedCodingDate);

