import Button from '@/components/Button/Button'

function page() {
  return (
    <div>
      <h1>  Hello</h1>
      <Button add={'/v1/auth/login'} text={'Home'} />
    </div>
  )
}
export default page