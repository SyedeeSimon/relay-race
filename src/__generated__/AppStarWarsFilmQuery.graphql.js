/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppStarWarsFilmQueryVariables = {||};
export type AppStarWarsFilmQueryResponse = {|
  +film: ?{|
    +id: string,
    +created: ?string,
    +director: ?string,
    +episodeID: ?number,
  |}
|};
export type AppStarWarsFilmQuery = {|
  variables: AppStarWarsFilmQueryVariables,
  response: AppStarWarsFilmQueryResponse,
|};
*/


/*
query AppStarWarsFilmQuery {
  film(id: "ZmlsbXM6MQ==") {
    id
    created
    director
    episodeID
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": "ZmlsbXM6MQ=="
      }
    ],
    "concreteType": "Film",
    "kind": "LinkedField",
    "name": "film",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "director",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "episodeID",
        "storageKey": null
      }
    ],
    "storageKey": "film(id:\"ZmlsbXM6MQ==\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppStarWarsFilmQuery",
    "selections": (v0/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppStarWarsFilmQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c6946adb4a0558a797a207cf8fe71ad8",
    "id": null,
    "metadata": {},
    "name": "AppStarWarsFilmQuery",
    "operationKind": "query",
    "text": "query AppStarWarsFilmQuery {\n  film(id: \"ZmlsbXM6MQ==\") {\n    id\n    created\n    director\n    episodeID\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1550448e41f1bdc1c909d1a975e7bdd9';

module.exports = node;
