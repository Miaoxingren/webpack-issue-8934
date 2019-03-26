# webpack-issue-8934

Test repo for webpack issue [#8934](https://github.com/webpack/webpack/issues/8934#issuecomment-476394072)

## Replication instructions

1. npm run bootstrap
2. npm run dev
3. Open http://localhost:8080 in browser

### Current outcome:

```
GET http://localhost:8080/my-custom-comp.common.MyTaglist1.js net::ERR_ABORTED 404 (Not Found)

[Vue warn]: Failed to resolve async component: function list1() {
      return __webpack_require__.e(/* import() | MyTaglist1 */ 0).then(__webpack_require__.bind(null, "1515"));
    }
Reason: Error: Loading chunk 0 failed.
(error: http://localhost:8080/my-custom-comp.common.MyTaglist1.js)
```