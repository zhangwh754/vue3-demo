// import { useRouter } from 'vue-router'

const modules = import.meta.glob('../views/*.vue')

const keys = Object.keys(modules)

keys.sort((a, b) => {
  const p = Number(a.replace('../views/', '').split('-')[0])
  const n = Number(b.replace('../views/', '').split('-')[0])
  return p - n
})

type Routes = Array<{
  name: string
  path: string
  component: any
}>

const autoRoutes: Routes = []
for (const key of keys) {
  autoRoutes.push({
    name: key,
    path: key.replace('../views/', '/').replace('.vue', '').toLowerCase(),
    component: modules[key]
  })
}

// const router = useRouter()

// autoRoutes.forEach(route => router.addRoute(route))

export { autoRoutes }
