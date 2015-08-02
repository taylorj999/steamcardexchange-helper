# steamcardexchange-helper 

steamcardexchange.net is a platform for monitoring the trading inventory of the CardTrades
Steam group. It includes user watchlist functionality to watch for potential trades a user
might want to make, the most useful of which is to register when cards are available at fair
value. Unfortunately, it does not allow filtering or ordering based on card availability,
which can quickly render the watchlist unusable for large list sizes, due to the large
number of entries which aren't available for trade at the moment obscuring those which are.

This exceedingly simple chrome extension simply removes from the DOM all rows on the watchlist
page which don't have cards available at fair value.