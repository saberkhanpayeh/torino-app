"use client";
import { useTransactionData } from "@/services/queries";
import { shortenTransactionId } from "@/utils/helper";
import React from "react";
import styles from "@/components/module/UserTransaction.module.css";
function UserTransaction() {
  const { data, isLoading } = useTransactionData();
  const transactions = data?.data || [];
  console.log(transactions);
  return (
    <div className={styles.tableContainer}>
      {transactions.length === 0 && !isLoading && (
        <div className={styles.notFound}>
          <p>تراکنشی برای شما وجود ندارد!</p>
        </div>
      )}
      {transactions.length > 0 && !isLoading && (
        <table>
          <thead>
            <tr>
              <th>تاریخ و ساعت</th>
              <th>مبلغ(تومان)</th>
              <th>نوع تراکنش</th>
              <th>شماره سفارش</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item) => (
              <tr key={item.id}>
                <td>
                  <span>
                    {new Date(item.createdAt).toLocaleTimeString("fa-IR")}
                  </span>
                  <span>-</span>
                  <span>
                    {new Date(item.createdAt).toLocaleDateString("fa-IR")}
                  </span>
                </td>
                <td>{item.amount}</td>
                <td>ثبت نام در تور گردشگری</td>
                <td><span className={styles.textId}>سفارش </span>{shortenTransactionId(item.id)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserTransaction;
