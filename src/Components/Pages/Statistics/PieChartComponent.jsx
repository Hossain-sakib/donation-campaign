
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const PieChartComponent = ({ donations }) => {
    console.log(donations[0]);
    const data = [
        { name: 'Your Donation', value: donations[1] },
        { name: 'Total Donation', value: donations[0] }
    ];

    const total = data.reduce((acc, item) => acc + item.value, 0);

    const renderLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent
    }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5; 
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };

    const COLORS = ['#00C49F', '#FF444A'];

    return (
        <div className='flex h-[75vh] items-center justify-center'>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={150}
                    fill="#8884d8"
                    label={renderLabel}
                    labelLine={false}
                >
                    {
                        data?.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
}

export default PieChartComponent;