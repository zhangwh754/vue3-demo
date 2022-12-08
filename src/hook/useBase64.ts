import { onMounted } from 'vue'

type Options = {
  el: string
}

export default function (options: Options): Promise<string> {
  return new Promise(resolve => {
    onMounted(() => {
      const img: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
      const lastIndexOfDot = img.src.lastIndexOf('.')
      const type = img.src.slice(lastIndexOfDot).replace('.', '/')

      img.onload = () => {
        resolve(base64(img, type))
      }
    })
    const base64 = (img: HTMLImageElement, type: string) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = img.width
      canvas.height = img.height
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
      return canvas.toDataURL(`image${type}`)
    }
  })
}
