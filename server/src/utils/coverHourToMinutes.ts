export default function convertHourToMinutes(time: string) {
    // convertendo horas para minutos
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutes = (hour * 60) + minutes;

    return timeInMinutes;
}