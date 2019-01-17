import 'reflect-metadata'
import { Service } from './service'
import container from './di-container'

const service: Service = container.resolve<Service>(Service)

console.log(service.getAllNames())
