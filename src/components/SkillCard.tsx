import React from 'react'
import { Card, CardContent } from './ui/card'
import { LucideIcon } from 'lucide-react'

interface SkillCardProps {
    name: string
    icon: LucideIcon
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon }) => {
    return (
        <Card className="transition-all hover:scale-105 backdrop-blur-lg bg-opacity-50">
            <CardContent className="flex flex-col items-center justify-center h-24 p-2">
                <Icon className="w-8 h-8 mb-2" />
                <span className="text-sm font-medium text-center">{name}</span>
            </CardContent>
        </Card>
    )
}

export default SkillCard