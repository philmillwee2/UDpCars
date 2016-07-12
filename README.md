UDP Service for Project Cars built in NodeJS.

# Backstory
I've always been fascinated with the levels of engineering that exist in
motorsport. I've also played with video games and computers since I was 6 years
old. I discovered this post (http://forum.projectcarsgame.com/showthread.php?40113-HowTo-Companion-App-UDP-Streaming) and decided that a
playing with this functionality could be fun.

# Overview
The game plan is to get UDP information pulled from Project Cars via UDP
broadcasts. UDP packets will then need to be decoded into their respective
types. Finally, the newly formed data structures will need to be converted into
a messaging format (currently looking at JSON -> Elasticsearch).
