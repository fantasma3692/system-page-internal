const API = "https://developers.buymeacoffee.com/api/v1/supporters";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MTI5ZDIwMC1kYTdkLTRjY2MtOWQzZC01ODA0MTU0ZTgyMjYiLCJqdGkiOiI4ZDI4MDljMTM2NjYzZGQ0YjMyNGQ3Mjk4MWE0ODc1MmVlNzdlM2JjMWI3YWNjNmQxNzA0OTE1YTI4ZjE5MzZkZjk1Zjg5NjNhN2U3ZWU0NyIsImlhdCI6MTY5Nzc1MzA5MywibmJmIjoxNjk3NzUzMDkzLCJleHAiOjE3MTM1NjQyOTMsInN1YiI6IjI5MzQ3OTciLCJzY29wZXMiOlsicmVhZC1vbmx5Il19.SXc9ovTStVLxFZ9wDZFkW5Ioj6g-AO3Vc7AM2KV0j56S84l_JPXwx-xcfF_n2bTo5pmK3C0tEUw4uSEi_v8ftV5XR-vQxPnlEng3J7sn9k0o0qa40lEmHlUqIu5GDBLFFbqR6AOHSejpyU2PhzoURdSPREtyemjxWsI4aPwAfJZuFX2YN6DROGFNKeXJ2aVlCsOC48jPXbyyF6yV-nArVUK05YMFrhOuG5yvehUIcohYhKDkfpFVSTgYm2E-IvLiUcXuNl94ITMUTKXL662rx9XNltNMiiy_FgQHDzQgXm8mW4fu92scibdmCAMcQVFM4n1VPuX-B2hzHN0m0LzgK_bYpEHiQg5TFhqfBI9B6BWuqsM4pKDA-HJ85Hbjk2ink1qGR1qBCFSQrQ8Z46d_XpTkzfJatrAcoGcygCI3vEwkHnEiCKtzLWtGHL-Twcy_AbO5GNoUWT5bTAI33cAwyz2raE_fMAee8gxiPbZd6XzRTaCDsz6GE5cKZKogLiIQh2GHEXpyTb1ic3-LziOV1XSVn2OWASd-UfXEQsOUlY3FsfoEa0CLtk-lZnBkJKQd-HiWn_WQL6PWojP7ocerGASlSE4Vy7hLmiDUt5hCzorHOW5YwAr2YGCiyL1SJ0ZMY2eDgNjqWuzq0jUfHS9TDRf4lIxUpwpGZdJudl-VRSs";
export function getMiembrosBuycoffe() {
  return fetch(API, {
    headers: {
      Authorization: "Bearer " + token,
    },
   
  }).then((result) => result.json());
}
