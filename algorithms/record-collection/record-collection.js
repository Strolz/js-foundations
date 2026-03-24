
/*

1. You should have a updateRecords function.
2. After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA
3. After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element.
4. After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set
5. After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.
6. After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
7. After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set
8. After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide

*/

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {

  /* Remove property when value is emplty */
   if (value == "") {
      delete records[id][prop];

  /* Update collection with provided values */
  } else if (prop !== "tracks" && value !== "") {
      records[id][prop] = value;
  } else if (prop == "tracks" && value !== "" && records[id].hasOwnProperty("tracks") == false) {
      records[id][prop] = [value];
  } else if (prop == "tracks" && value !== "") {
    records[id][prop].push(value);  
  }

  return records;
};
