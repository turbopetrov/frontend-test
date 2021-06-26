import instance from './instance';
import authModule from './auth';
import workersModule from './workers'

export default {
  auth: authModule(instance),
  workers: workersModule(instance),
}