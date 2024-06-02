import { axiosWithAuth } from '@/api/interceptors'

class TestService {
	private BASE_URL = '/api/brand/for-select'

	async getForSelect() {
		const response = await axiosWithAuth.get(this.BASE_URL)
		return response
	}
}

export const testService = new TestService()
