import Link from '@vercel/examples-ui/link'
import Button from '@vercel/examples-ui/button'
import DeployButton, { DeployButtonProps } from '@vercel/examples-ui/deploy-button'
import { Layout, Text, Page } from '@vercel/examples-ui'

export interface NavProps {
  path: string
  deployButton?: Partial<DeployButtonProps>
}

export default function Nav({ path, deployButton }: NavProps) {

  return (
    <nav className="border-b border-gray-200 py-5 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]">
      <div className="flex items-center lg:px-6 px-8 mx-auto max-w-7xl px-14">
        <div className="flex flex-row items-center">
        </div>
      </div>
    </nav>
  )
}
