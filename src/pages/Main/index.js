import React, { useState, useCallback, useEffect } from "react"
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import api from '../../services/api'

import { Container, Form, SubmitButton, List, DeleteButton } from './styles'

export default function Main() {
    const [newRepo, setNewRepo] = useState('')
    const [repositories, setRepositories] = useState([])
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(null)

    useEffect(() => {
        const repoStorage = localStorage.getItem('repositories')

        if(repoStorage) {
            console.log(repoStorage)
            setRepositories(JSON.parse(repoStorage))
        }

        console.log('Dados buscados')

    }, [])

    // Save data on LocalStorage
    useEffect(() => {
        localStorage.setItem('repositories', JSON.stringify(repositories))
        console.log(repositories)
    }, [repositories])

    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        async function submit() {
            setLoading(true)
            setAlert(null)

            try {
                if (newRepo === '') {
                    throw new Error('É necessário indicar um repositório')
                }

                const response = await api.get(`repos/${newRepo}`)

                const hasRepo = repositories.find(repo => repo.name === newRepo)

                if (hasRepo) {
                    throw new Error('Repositório duplicado')
                }

                const data = {
                    name: response.data.full_name
                }

                setRepositories([...repositories, data])
                setNewRepo('')
            } catch (error) {
                setAlert(true)
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        submit()

    }, [newRepo, repositories])

    async function handleInputChange(e) {
        setNewRepo(e.target.value)
        setAlert(null)
    }

    const handleDelete = useCallback((repo) => {
        const find = repositories.filter(r => r.name !== repo)
        setRepositories(find)
    }, [repositories])



    return (
        <Container>
            <h1>
                <FaGithub size={25} />
                Meus repositórios
            </h1>

            <Form onSubmit={handleSubmit} error={alert}>
                <input
                    type='text'
                    placeholder='Adicionar repositório'
                    value={newRepo}
                    onChange={handleInputChange}
                />

                <SubmitButton loading={loading ? 1 : 0}>
                    {loading ? (
                        <FaSpinner color="white" size={14} />
                    ) : (
                        <FaPlus color="#FFF" size={14} />
                    )}

                </SubmitButton>
            </Form>

            <List>
                {repositories.map(repo => (
                    <li key={repo.name}>
                        <span>
                            <DeleteButton onClick={() => { handleDelete(repo.name) }}>
                                <FaTrash size={14} />
                            </DeleteButton>
                            {repo.name}
                        </span>
                        <a href=''>
                            <FaBars size={20} />
                        </a>
                    </li>
                ))}
            </List>

        </Container>
    )
}