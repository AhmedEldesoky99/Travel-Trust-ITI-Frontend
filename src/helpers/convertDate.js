const getFormattedDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const formattedDate = `${day} ${month}, ${year}`;

    return formattedDate;
};

export default getFormattedDate;