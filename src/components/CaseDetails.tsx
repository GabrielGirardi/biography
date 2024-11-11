import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

interface Case {
    id: number
    name: string
    description: string
    image: string
}

interface CaseDetailsProps {
    cases: Case[]
    translations: {
        [key: string]: {
            [key: string]: string
        }
    }
}

const CaseDetails: React.FC<CaseDetailsProps> = ({ cases, translations }) => {
    const { id } = useParams<{ id: string }>()
    const caseItem = cases.find(c => c.id === Number(id))
    const t = translations['pt-BR']

    if (!caseItem) {
        return <div>Case not found</div>
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <Link to="/">
                    <Button variant="outline" className="mb-8">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {t.backToHome}
                    </Button>
                </Link>
                <Card className="backdrop-blur-lg bg-opacity-50 overflow-hidden">
                    <img src={caseItem.image} alt={caseItem.name} className="w-full h-64 object-cover" />
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold">{caseItem.name}</CardTitle>
                        <CardDescription className="text-lg">{caseItem.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h3 className="text-xl font-semibold mb-4">{t.challenge}</h3>
                        <p className="mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <h3 className="text-xl font-semibold mb-4">{t.solution}</h3>
                        <p className="mb-6">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <h3 className="text-xl font-semibold mb-4">{t.results}</h3>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default CaseDetails