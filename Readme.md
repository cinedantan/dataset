<p align="center">
  <a href="https://cinedantan.com">
    <img src="https://cinedantan.com/logo192.png" />
  </a>
</p>

# Hello there!

This is a small Nodejs script to update and test the dataset

![](https://cdn.cinedantan.com/github/you-might-like.png)

The dataset is located here: 

    /dist/movies_dist.json

To remove an entry from the dataset, you have to add it's IMDB id here: 

    /exclude.js

Than run 

    npm run build

~~Adding new entries is not implemented yet~~

To add a movie to the dataset, simply add a json file to this folder

	./src/addNew

Here is an example

    {
        "imdb": "tt0055867",
        "status": "free",
        "title": "Costantino il grande (1961)",
        "year": "1961",
        "runtime": "2h",
        "story": "Cornel Wilde as Constantine\nBelinda Lee as Fausta\nMassimo Serato as Maxentius\nChristine Kaufmann as Livia\nFausto Tozzi as Hadrian\nTino Carraro as Maximian\nCarlo Ninchi as Constantius Chlorus\nVittorio Sanipoli as  Apuleius\nNando Gazzolo as Licinius\nAnnibale Ninchi as Galarius\nElisa Cegani as Elena\nFranco Fantasia as Roman Soldier\nLoris Gizzi as  Roman Prosecutor\nEnrico Glori as  Livia's Father\nJole Mauro as Celi\nNando Tamberlani as Diocletian\nRenato Terra as  Jailer\nLauro Gazzolo as Amodius",
        "director": ["Lionello De Felice"],
        "writers": ["Michael Audley", "Ennio De Concini"],
        "stars": ["Cornel Wilde", "Belinda Lee", "Massimo Serato"],
        "genre": ["Adventure", "Drama", "History", "Romance", "War"],
        "rating": "5.9",
        "related": ["tt0056174", "tt0054422", "tt0057547", "tt0052604", "tt0056556", "tt0052351", "tt0050311", "tt0140364", "tt0037263", "tt0055962", "tt0058312", "tt0049005"],
        "aoMeta": { "subject": ["Constantine the Great; Roman Empire; Byzantine Empire; Christian Church; Milvian Bridge; Epic; Sword and Sandal"] },
        "aoFiles": [
            { "url": "/Constantine_and_the_Cross.mp4", "format": "h.264" },
            { "url": "/Constantine_and_the_Cross_256kb.mp4", "format": "256Kb MPEG4" },
            { "url": "/Constantine_and_the_Cross_64kb.mp4", "format": "64Kb MPEG4" },
            { "url": "/PublicDomainJadranPicturesandJoniaPicturesConstantineandtheCross1962_archive.torrent", "format": "Archive BitTorrent" }],
        "identifier": "PublicDomainJadranPicturesandJoniaPicturesConstantineandtheCross1962",
        "archiveDownloadCount": 19875,
        "wiki": "Q2995039",
        "storyFrom": "wp"
    }

than run

	npm run build

**ao: **archive.org
**wp:** wikipedia
**aoFiles: ** only one file is required
**identifier: ** archive.org identifier


