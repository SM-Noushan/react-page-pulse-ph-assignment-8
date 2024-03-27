import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { getBooks } from "../utils";
import NoData from '../components/NoData';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#831843', '#c026d3', '#172554', '#172554', '#164e63', '#64748b'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(getBooks('read'));
    }, [])
    return (
        <section className="min-h-[calc(100dvh-472px)] md:min-h-[calc(100dvh-342px)] flex items-center justify-center">
            {
                data.length ?
                    <div className="w-full h-[calc(100dvh-472px)] md:h-[calc(100dvh-342px)]">
                        <ResponsiveContainer>
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    left: 20,
                                    bottom: 20,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="bookName" />
                                <YAxis />
                                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    :
                    <NoData />
            }
        </section>
    );
};

export default PagesToRead;