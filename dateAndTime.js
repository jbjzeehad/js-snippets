const currentDateAndTime = new Date();

console.log(currentDateAndTime);

// output: 2026-03-29T06:01:25.821Z

const objectToString = currentDateAndTime.toISOString();

console.log(objectToString);

// output: 2026-03-29T06:16:52.859Z

const currentDateSplit = objectToString.split("T")[0]; //... using split

const currentDateSlice = objectToString.slice(0, 10); //... using slice

console.log(currentDateSplit);

// output: 2026-03-29

console.log(currentDateSlice);

// output: 2026-03-29

const currentTime = objectToString.split("T")[1];

console.log(currentTime);

// output: 06:30:18.794Z

const intlDateFormatGB = new Intl.DateTimeFormat("en-GB").format(
  currentDateAndTime,
);

console.log(intlDateFormatGB);

// output: 29/03/2026

const intlDateFormatUS = new Intl.DateTimeFormat("en-US").format(
  currentDateAndTime,
);

console.log(intlDateFormatUS);

// output: 3/29/2026

const dateFormatPro = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "long", // short (Mar)
  year: "numeric",
}).format(currentDateAndTime);

console.log(dateFormatPro);

// output: 29 March 2026

const dateFormatPro2 = currentDateAndTime.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short", // long (March)
  year: "numeric",
});

console.log(dateFormatPro2);

// output: 29 Mar 2026

const timeFormatPro = new Intl.DateTimeFormat("en-GB", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true, // false (24-hour format)
}).format(currentDateAndTime);

console.log(timeFormatPro);

// output: 1:29 pm

const timeFormatPro2 = currentDateAndTime.toLocaleTimeString("en-GB", {
  hour: "numeric",
  minute: "2-digit",
  hour12: false, // true (12-hour format)
});

console.log(timeFormatPro2);

// output: 13:29 pm

const dateTimeFormatPro = currentDateAndTime.toLocaleString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit", // numeric
  minute: "2-digit",
  hour12: true,
});

console.log(dateTimeFormatPro);

// output: 29 Mar 2026, 01:48 pm
