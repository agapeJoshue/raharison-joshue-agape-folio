import { ref } from 'vue';
import type { Ref } from 'vue';
import { BASE_API } from '@/api/endpoints';

export interface UseFetchOptions extends RequestInit {
    immediate?: boolean;
}

export function useFetch<T>(url: string, options: UseFetchOptions = {}) {
    const data: Ref<T | null> = ref(null);
    const error: Ref<string | null> = ref(null);
    const loading = ref(false);

    const fetchData = async (override?: RequestInit) => {
        loading.value = true;
        error.value = null;

        try {
            const response = await fetch(`${BASE_API}${url}`, {
                ...options,
                ...override,
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            data.value = (await response.json()) as T;
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Erreur inconnue';
            throw err;
        } finally {
            loading.value = false;
        }
    };

    if (options.immediate) {
        fetchData();
    }

    return {
        data,
        error,
        loading,
        fetchData,
    };
}
