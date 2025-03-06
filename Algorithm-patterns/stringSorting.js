function frequencySort(s) {
    const freqMap = {};
    for (const char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }
    //sorting based on freq and ascii char
    const sorted = Object.entries(freqMap).sort((a, b) => {
      if (b[1] === a[1]) {
          return a[0].charCodeAt(0) - b[0].charCodeAt(0) // Alphabetical order if frequencies are equal
      }
      return b[1] - a[1]; // Descending order of frequency
    });
    let result = ''
    for(const [char, freq] of sorted) {
      result += char.repeat(freq)
    }
    return result
}

function frequencySortBucket(s) {
    // Count the frequency of each character
    const freqMap = {};
    for (const char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    // Create buckets for frequencies
    const buckets = Array(s.length + 1).fill(null).map(() => []);
    for (const char in freqMap) {
        buckets[freqMap[char]].push(char);
    }

    // Build the result string
    let result = '';
    for (let i = buckets.length - 1; i > 0; i--) {
        if (buckets[i].length > 0) {
            // Sort characters in ASCII order within the bucket
            buckets[i].sort();
            for (const char of buckets[i]) {
                result += char.repeat(i);
            }
        }
    }

    return result;
}