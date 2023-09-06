import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import { useParams } from 'react-router-dom';

function UserDetailsPage() {
    const { id } = useParams();
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);

    return(
        <h1>UserDetailsPage</h1>
    );
}

export default UserDetailsPage;