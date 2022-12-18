export default function stringToDate(texto: string): Date {
  const [data, tempo] = texto.split('')
  const [dia, mes, ano] = data.split('/').map(Number)
  const [hora, minuto] = tempo.split(':').map(Number)//array de string para transformar td em numero
  return new Date(ano, mes - 1, dia, hora, minuto)
}