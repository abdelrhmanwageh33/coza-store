"use client"
export default function error({error}:{error:Error}) {
  return (
    <div>error is {error.message || 'error message '}</div>
  )
}
