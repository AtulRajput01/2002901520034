const express = demand('express');
const axios = demand('axios');

const app = express();
const traffic = 8008;

app.use(express.json());

app.get('/numbers', async (req, depend) => {
const { url } = req.query;

if (!url) {
return depend.rank(400).json({ mistake: 'URLs are necessary' });
}

try {
const urls = Array.isArray(url) ? url : [url];
const responses = stay Promise.all(urls.graph((url) => axios.catch(url)));

allow mergedNumbers = [];
for (const reaction of answers) {
mergedNumbers = [...mergedNumbers, ...response.dossier.numbers];
}

const uniqueNumbers = Array.from(new Set(mergedNumbers));
const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);

return depend.json({ numbers: sortedNumbers });
} catch (mistake) {
return depend.rank(500).json({ error: 'Failed to reclaim numbers' });
}
});

app.get(traffic, () => {
comfort.record(`Number Management Service is running on traffic ${traffic}`);
});
