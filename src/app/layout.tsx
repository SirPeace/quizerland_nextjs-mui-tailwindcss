import './globals.css'
import { CssBaseline } from '@mui/material'
import { Inter } from 'next/font/google'

import { ReduxProvider } from '@/redux/ReduxProvider'

import Drawer from '../components/navigation/Drawer/Drawer'

const inter = Inter({ subsets: ['cyrillic'], preload: true })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}): JSX.Element {
	return (
		<html lang="ru">
			<head>
				<title>Quizzes | Quizzerland</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="Приложение Nextjs для создания тестов"
				/>
				<link rel="icon" href="/favicon.ico" sizes="32x32" />
			</head>

			<ReduxProvider>
				<body id="__next" className={inter.className}>
					<CssBaseline />

					<Drawer />

					<main className="text-gray-700">{children}</main>
				</body>
			</ReduxProvider>
		</html>
	)
}
