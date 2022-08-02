const findMatching = (driverList, matchString) => driverList.filter(driverName => driverName.toUpperCase() === matchString.toUpperCase());

const fuzzyMatch = (driverList, matchString) => driverList.filter(driverName => driverName.toUpperCase().startsWith(matchString.toUpperCase()));

const matchName = (driverList, matchString) => driverList.filter(element => element.name.toUpperCase() === matchString.toUpperCase());