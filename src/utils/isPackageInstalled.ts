import { execSync } from 'child_process'

export const isPackageInstalled =(command: string): boolean =>{
    try {
        execSync(`${command} --version`, { stdio: 'ignore' })
        return true
    } catch (error) {
        return false
    }
}
