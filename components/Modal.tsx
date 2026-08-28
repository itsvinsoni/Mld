import React, { useEffect } from 'react';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    /** Max width class, e.g. 'max-w-lg'. */
    maxWidth?: string;
}

/**
 * Lightweight modal used for Add/Edit forms and confirmation dialogs.
 * Closes on backdrop click and on Escape.
 */
export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, footer, maxWidth = 'max-w-lg' }) => {
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
                aria-hidden="true"
            />
            <div
                className={`relative w-full ${maxWidth} bg-light-surface dark:bg-dark-surface rounded-2xl shadow-2xl max-h-[90vh] flex flex-col`}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-light-border dark:border-dark-border">
                    <h3 className="text-xl font-bold text-light-textPrimary dark:text-dark-textPrimary">{title}</h3>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400"
                        aria-label="Close"
                    >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="px-6 py-5 overflow-y-auto">{children}</div>
                {footer && (
                    <div className="px-6 py-4 border-t border-light-border dark:border-dark-border flex justify-end gap-3">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
};

interface ConfirmDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    message: string;
    confirmLabel?: string;
    danger?: boolean;
}

/** Reusable destructive-action confirmation dialog. */
export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    open,
    onClose,
    onConfirm,
    title = 'Confirm',
    message,
    confirmLabel = 'Delete',
    danger = true,
}) => (
    <Modal
        open={open}
        onClose={onClose}
        title={title}
        maxWidth="max-w-md"
        footer={
            <>
                <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                    Cancel
                </button>
                <button
                    onClick={onConfirm}
                    className={`px-4 py-2 rounded-lg text-sm font-bold text-white transition ${
                        danger ? 'bg-red-500 hover:bg-red-600' : 'bg-brand-orange hover:bg-brand-orange-dark'
                    }`}
                >
                    {confirmLabel}
                </button>
            </>
        }
    >
        <p className="text-light-textSecondary dark:text-dark-textSecondary">{message}</p>
    </Modal>
);

/** Shared form-field styling so every entity form looks identical. */
export const fieldClass =
    'w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-light-border dark:border-dark-border text-light-textPrimary dark:text-dark-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange';

interface FieldProps {
    label: string;
    children: React.ReactNode;
}

/** Label + control wrapper used inside modal forms. */
export const Field: React.FC<FieldProps> = ({ label, children }) => (
    <div>
        <label className="block text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mb-1">{label}</label>
        {children}
    </div>
);
