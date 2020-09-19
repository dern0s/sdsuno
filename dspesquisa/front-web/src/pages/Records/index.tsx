import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { RecordsResponse } from './types';
import { formatDate } from './helpers';

const BASE_URL : string = 'http://localhost:8080';

const Records = () => {
    
    const [ recordsResponse , setRecordsResponse ] = useState<RecordsResponse>();

    useEffect(() => {
        axios.get(`${BASE_URL}/records?linesPerPage=12`)
        .then(response => setRecordsResponse(response.data));
    }, []);

    return (

        <div className="page-container">
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>INSTANTE</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GÊNERO</th>
                        <th>TÍTULO DO JOGO</th>
                    </tr>
                </thead>
                <tbody>
                    {recordsResponse?.content.map( record => (
                        <tr key={record.id}>
                        <td>{formatDate(record.moment)}</td>
                        <td>{record.name}</td>
                        <td>{record.age}</td>
                        <td className="text-secondary">{record.gamePlatform}</td>
                        <td>{record.genreName}</td>
                        <td className="text-primary">{record.gameTitle}</td>
                    </tr>
                    ) )}
                </tbody>
            </table>
        </div>
    
    );
}

export default Records;