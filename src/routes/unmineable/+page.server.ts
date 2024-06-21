import type { LayoutServerLoad } from './$types';
import { ADDRESS, BASE_UNMINEABLE_API, COIN, UNMINEABLE_UUID } from '$env/static/private';

const fetchAddressData = async () => {
	const res = await fetch(`${BASE_UNMINEABLE_API}/address/${ADDRESS}?coin=${COIN}`);
	const addressData = await res.json();
	return addressData;
}

const fetchWorkerData = async () => {
	const res = await fetch(`${BASE_UNMINEABLE_API}/account/${UNMINEABLE_UUID}/workers`);
	const addressData = await res.json();
	return addressData;
}

const fetchStatsData = async () => {
	const res = await fetch(`${BASE_UNMINEABLE_API}/account/${UNMINEABLE_UUID}/stats`);
	const statsData = await res.json();
	return statsData;
}


export const load: LayoutServerLoad = async () => {	
	const addressData = await fetchAddressData();
	const workerData = await fetchWorkerData();
	const statsData = await fetchStatsData();
	return {		statsData, addressData, workerData	};}



