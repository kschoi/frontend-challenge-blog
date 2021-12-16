declare interface IPaginationRequest {
  _page: number
  _limit: number
}

// 검색 조건이 있을 때 사용
// declare interface IPaginationRequest<R> {
//   page: number
//   size: number
//   criteria: R
// }
