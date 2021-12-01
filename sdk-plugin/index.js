import ContentstackLivePreview from "@contentstack/live-preview-utils";

const contentstack = require("contentstack");

const Stack = contentstack.Stack({
  api_key: process.env.API_KEY,
  delivery_token: process.env.DELIVERY_TOKEN,
  environment: process.env.VERCEL_ENV ? process.env.VERCEL_ENV : process.env.ENVIRONMENT,
  region: process.env.REGION ? process.env.REGION : "us",
  live_preview: {
    management_token: process.env.MANAGEMENT_TOKEN,
    enable: true,
    host: 'api.contentstack.io'
  },
});

if (process.env.CUSTOM_HOST) {
  Stack.setHost(process.env.CUSTOM_HOST);
}

ContentstackLivePreview.init({
  enable: true,
  stackDetails: {
    apiKey: "bltdd864dc0907fe3cc",
  },
});

export default {
  /**
   *
   * fetches all the entries from specific content-type
   * @param {* content-type uid} contentTypeUid
   * @param {* reference field name} referenceFieldPath
   *
   */
  getEntry(contentTypeUid, referenceFieldPath) {
    return new Promise((resolve, reject) => {
      const query = Stack.ContentType(contentTypeUid).Query();
      if (referenceFieldPath) query.includeReference(referenceFieldPath);
      query
        .includeOwner()
        .toJSON()
        .find()
        .then(
          (result) => {
            resolve(result);
          },
          (error) => {
            reject(error);
          },
        );
    });
  },

  /**
   *fetches specific entry from a content-type
   *
   * @param {* content-type uid} contentTypeUid
   * @param {* url for entry to be fetched} entryUrl
   * @param {* reference field name} referenceFieldPath
   * @returns
   */
  getEntryByUrl(contentTypeUid, entryUrl, referenceFieldPath) {
    return new Promise((resolve, reject) => {
      const blogQuery = Stack.ContentType(contentTypeUid).Query();
      if (referenceFieldPath) blogQuery.includeReference(referenceFieldPath);
      blogQuery.includeOwner().toJSON();
      const data = blogQuery.where("url", `${entryUrl}`).find();
      data.then(
        (result) => {
          resolve(result[0]);
        },
        (error) => {
          reject(error);
        },
      );
    });
  },
};
