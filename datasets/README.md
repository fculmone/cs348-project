I have yet to copy over the descriptions for the cities table. 

I usually work on this when I'm on the bus, so I'll proably have it done by next monday.

When writing the sql queries, please consider the table assuming that everything is filled.

Still not 100% sure how to convert csv to sql using mysql, but I saw a few tutorials and it looks decently easy


SOURCES
https://stacker.com/stories/travel/top-100-city-destinations-world

https://www.kaggle.com/datasets/danishammar/top-100-cities-weather-dataset?resource=download


For the stacker database, says "Using data from Euromonitor International's 2023 Top 100 City Destinations index." Didn't use that source directly since the dataset cost $3000 to access. needed to create csv by hand

The kaggle one is from april 2024. Not sure if all 100 cities in each are the same, but can always just do an outer join to figure out which are missing and add them manually.
