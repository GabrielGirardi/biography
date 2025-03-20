import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		fontFamily: {
    			sans: [
    				'Inter',
    				'sans-serif'
    			],
    			mono: [
    				'JetBrains Mono',
    				'monospace'
    			]
    		},
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			},
    			kawasaki: {
    				green: '#3dae2b',
    				light: '#f7f7f7',
    				dark: '#1a1a1a'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			'fade-in': {
    				from: {
    					opacity: '0',
    					transform: 'translateY(10px)'
    				},
    				to: {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'fade-out': {
    				from: {
    					opacity: '1',
    					transform: 'translateY(0)'
    				},
    				to: {
    					opacity: '0',
    					transform: 'translateY(10px)'
    				}
    			},
    			'scale-in': {
    				from: {
    					opacity: '0',
    					transform: 'scale(0.98)'
    				},
    				to: {
    					opacity: '1',
    					transform: 'scale(1)'
    				}
    			},
    			'slide-in-right': {
    				from: {
    					transform: 'translateX(100%)'
    				},
    				to: {
    					transform: 'translateX(0)'
    				}
    			},
    			'slide-in-left': {
    				from: {
    					transform: 'translateX(-100%)'
    				},
    				to: {
    					transform: 'translateX(0)'
    				}
    			},
    			'slide-in-bottom': {
    				from: {
    					transform: 'translateY(100%)'
    				},
    				to: {
    					transform: 'translateY(0)'
    				}
    			},
    			'text-reveal': {
    				'0%': {
    					transform: 'translateY(100%)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'translateY(0)',
    					opacity: '1'
    				}
    			},
    			float: {
    				'0%, 100%': {
    					transform: 'translateY(0)'
    				},
    				'50%': {
    					transform: 'translateY(-10px)'
    				}
    			},
    			'cursor-blink': {
    				'0%, 100%': {
    					opacity: '1'
    				},
    				'50%': {
    					opacity: '0'
    				}
    			},
    			rotation: {
    				'0%': {
    					transform: 'rotate(0deg)'
    				},
    				'100%': {
    					transform: 'rotate(360deg)'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'fade-in': 'fade-in 0.5s ease-out forwards',
    			'fade-out': 'fade-out 0.5s ease-out forwards',
    			'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    			'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    			'slide-in-left': 'slide-in-left 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    			'slide-in-bottom': 'slide-in-bottom 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    			'text-reveal': 'text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    			float: 'float 6s ease-in-out infinite',
    			'cursor-blink': 'cursor-blink 1s step-end infinite',
    			rotation: 'rotation 8s linear infinite'
    		},
    		transitionTimingFunction: {
    			cubic: 'cubic-bezier(0.16, 1, 0.3, 1)'
    		},
    		backgroundImage: {
    			'0': 0,
    			'200': 200,
    			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    			noise: 'url(\\\\"data:image/svg+xml,%3Csvg viewBox=',
    			' xmlns=': 'http'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;