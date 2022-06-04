import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Grafica = ({ ramdon }) => {

    // const [ramdon, setRamdon] = useState([]);

    // const getData = () => {
    //     axios.get("http://localhost:3001/")
    //         .then(res => {
    //             setRamdon(res.data)
    //         })
    // }

    // let datos = [];
    // for (let index = 0; index < 4; index++) {
    //     datos[index] = Math.round(Math.random() * (1000 - 500) + 100);
    // }

    const Data = {

        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Ventas',
            backgroundColor: 'rgba(10,158,226,1)',
            data: ramdon,
        }]
    };
    const opciones = {
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Meses',
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Ventas',
                }
            },
        },
        plugins: {
            title: {
                display: true,
                text: 'Sales by Month for:',
                font: {
                    family: "'Arial', 'Helvetica Neue', 'Helvetica', sans-serif",
                    size: 16,
                },
            },
            legend: {
                labels: {
                    text: 'Ventas',
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 20,
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                },
                display: true,
                position: 'bottom',
            },
        },
        maintainAspectRatio: false,
        responsive: true,
    }

    return (
        <div className='grafica'>
            <Bar data={Data} options={opciones} />
        </div>
    );
}

export default Grafica;