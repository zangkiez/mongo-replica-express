FROM mongo
RUN mkdir /config
WORKDIR /config
# COPY keyfile /var/lib/mongodb/keyfile
COPY wait-for-it.sh .
COPY mongo-setup.js .
COPY mongo-setup.sh .
# RUN chmod 400 /var/lib/mongodb/keyfile
# RUN chown mongodb:mongodb /var/lib/mongodb/keyfile
RUN chmod +x /config/wait-for-it.sh
RUN chmod +x /config/mongo-setup.sh
CMD [ "bash", "-c", "/config/wait-for-it.sh mongo1:27017 -- /config/mongo-setup.sh"]