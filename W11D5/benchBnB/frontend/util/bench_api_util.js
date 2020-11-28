export const fetchBenches = (filters) => {
  return $.ajax({
    method: "GET",
    url: "/api/benches",
    data: filters
  })
}

export const postBench = (bench) => {
  return $.ajax({
    method: "POST",
    url: "/api/benches",
    data: {bench}
  })
}